cmake_minimum_required(VERSION 3.28)
project(CPP_Template 
    VERSION 1.0.0
    DESCRIPTION "CPP Template"
    HOMEPAGE_URL "https://github.com/Zheng-Bote/cpp_template"
    LANGUAGES CXX)

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# --- Configure (für rz_config.hpp) ---
set(EXECUTABLE_NAME "${PROJECT_NAME}")
set(PROG_LONGNAME "C++23 Template with CMake and CI")
set(PROG_CREATED "2026")
set(PROG_AUTHOR "ZHENG Bote")
set(PROG_ORGANIZATION_NAME "ZHENG Robert")
set(PROG_ORGANIZATION_DOMAIN "net.hase-zheng")
# create rz_config.hpp
add_subdirectory(configure) 

# libcurl via find_package (System-abhängig)
find_package(CURL REQUIRED)

# --- 1. Dependencies via FetchContent ---
include(FetchContent)
FetchContent_Declare(
    qt_gh_update_checker
    GIT_REPOSITORY https://github.com/Zheng-Bote/qt_gh_update_checker.git
    GIT_TAG v1.0.0
)
FetchContent_MakeAvailable(qt_gh_update_checker)

FetchContent_Declare(
  nlohmann_json
  GIT_REPOSITORY https://github.com/nlohmann/json.git
  GIT_TAG        v3.11.3
)


include_directories(include)

file(GLOB_RECURSE SOURCES 
    src/*.cpp
    include/*.hpp
)

add_executable(${PROJECT_NAME} 
    ${SOURCES}
)

target_link_libraries(${PROJECT_NAME} PRIVATE 

    nlohmann_json::nlohmann_json
    gh_update_checker
    libcurl
)

# Standard flags
if(MSVC)
    target_compile_options(${PROJECT_NAME} PRIVATE /std:c++latest /W4)
else()
    target_compile_options(${PROJECT_NAME} PRIVATE -std=c++23 -Wall -Wextra -Wpedantic -Wshadow -Wconversion)
endif()

# --- 4. Installation ---
include(GNUInstallDirs)
install(TARGETS QtDependencyTrackerUI
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
    ARCHIVE DESTINATION ${CMAKE_INSTALL_LIBDIR}
)

# Install icon and desktop file
install(FILES resources/app_icon.png DESTINATION ${CMAKE_INSTALL_DATADIR}/icons/hicolor/256x256/apps/ RENAME ${PROJECT_NAME}.png)
install(FILES resources/${PROJECT_NAME}.desktop DESTINATION ${CMAKE_INSTALL_DATADIR}/applications/)

install(DIRECTORY include/ DESTINATION ${CMAKE_INSTALL_INCLUDEDIR})

# --- 5. Custom Generators (Original Code) ---

# CMake File API Query (Datei erzeugen)
set(QUERY_DIR "${CMAKE_BINARY_DIR}/.cmake/api/v1/query/client-project")
file(MAKE_DIRECTORY "${QUERY_DIR}")
file(WRITE "${QUERY_DIR}/codemodel-v2" "") 

# libs.txt Generierung (Timing-sicher via GENERATE)
file(GENERATE OUTPUT "${CMAKE_BINARY_DIR}/libs.txt" 
     CONTENT "$<TARGET_PROPERTY:${PROJECT_NAME},LINK_LIBRARIES>")