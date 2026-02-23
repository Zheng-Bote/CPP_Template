/**
 * SPDX-FileComment: Main entry point
 * SPDX-FileType: SOURCE
 * SPDX-FileContributor: ZHENG Robert
 * SPDX-FileCopyrightText: 2026 ZHENG Robert
 * SPDX-License-Identifier: MIT
 *
 * @file main.cpp
 * @brief Output all configuration constants.
 * @version 1.0.0
 * @date 2026-02-22
 *
 * @author ZHENG Robert (robert@hase-zheng.net)
 * @copyright Copyright (c) 2026 ZHENG Robert
 *
 * @license MIT License
 */

#include "rz_config.hpp"
#include <check_gh-update.hpp>
#include <print>

/**
 * @brief Main function to print out all constexpr values from rz_config.hpp.
 *
 * @return int Returns 0 on successful execution.
 */
int main() {

  try {
    // Start async check
    auto future = ghupdate::check_github_update_async(
        "https://github.com/Zheng-Bote/CPP_Template", "0.0.1");

    // Do other work while request is in progress
    std::println("Checking for updates...");

    // Wait for result (blocking)
    auto result = future.get();

    std::println("Latest version: {}", result.latestVersion);

    if (result.hasUpdate) {
      std::println("Update available!\n");
    }
  } catch (const std::exception &e) {
    std::println("Error: {}", e.what());
    // return 1;
  }

  std::println("PROJECT_NAME: {}", rz::config::PROJECT_NAME);
  std::println("PROG_LONGNAME: {}", rz::config::PROG_LONGNAME);
  std::println("PROJECT_DESCRIPTION: {}", rz::config::PROJECT_DESCRIPTION);

  std::println("EXECUTABLE_NAME: {}", rz::config::EXECUTABLE_NAME);

  std::println("VERSION: {}", rz::config::VERSION);
  std::println("PROJECT_VERSION_MAJOR: {}", rz::config::PROJECT_VERSION_MAJOR);
  std::println("PROJECT_VERSION_MINOR: {}", rz::config::PROJECT_VERSION_MINOR);
  std::println("PROJECT_VERSION_PATCH: {}", rz::config::PROJECT_VERSION_PATCH);

  std::println("PROJECT_HOMEPAGE_URL: {}", rz::config::PROJECT_HOMEPAGE_URL);
  std::println("AUTHOR: {}", rz::config::AUTHOR);
  std::println("CREATED_YEAR: {}", rz::config::CREATED_YEAR);
  std::println("ORGANIZATION: {}", rz::config::ORGANIZATION);
  std::println("DOMAIN: {}", rz::config::DOMAIN);

  std::println("CMAKE_CXX_STANDARD: {}", rz::config::CMAKE_CXX_STANDARD);
  std::println("CMAKE_CXX_COMPILER: {}", rz::config::CMAKE_CXX_COMPILER);
  std::println("QT_VERSION_BUILD: {}", rz::config::QT_VERSION_BUILD);

  return 0;
}
