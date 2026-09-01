#!/usr/bin/env bash
# SPDX-License-Identifier: Apache-2.0 OR MIT
# Semantic Version: v0.0.1
set -euo pipefail

PROTECTED_PATTERN="^(main|master|trunk|dev|develop|release/.*)$"
TARGET_REMOTE="${1:-origin}"
DRY_RUN="${DRY_RUN:-false}"

echo "=== [1/3] Synchronizing remote references for '${TARGET_REMOTE}' ==="
git fetch "${TARGET_REMOTE}" --prune 2>/dev/null || true

DEFAULT_BRANCH=$(git symbolic-ref "refs/remotes/${TARGET_REMOTE}/HEAD" 2>/dev/null | sed "s@^refs/remotes/${TARGET_REMOTE}/@@" || echo "main")

echo "=== [2/3] Pruning fully merged local branches ==="
LOCAL_MERGED=$(git branch --merged "${TARGET_REMOTE}/${DEFAULT_BRANCH}" 2>/dev/null | sed "s/^[ *]*//" || true)

for branch in ${LOCAL_MERGED}; do
  if [[ "${branch}" =~ ${PROTECTED_PATTERN} ]]; then
    continue
  fi
  if [ "${DRY_RUN}" = "true" ]; then
    echo "[DRY-RUN] Would delete local branch: ${branch}"
  else
    echo "Deleting merged local branch: ${branch}"
    git branch -d "${branch}" 2>/dev/null || git branch -D "${branch}"
  fi
done

echo "=== [3/3] Pruning complete ==="
