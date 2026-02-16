#!/usr/bin/env bash
set -euo pipefail

# Find all .git folders and loop over them
find . -type d -name ".git" | while read -r gitdir; do
    repo_dir=$(dirname "$gitdir")
    cd "$repo_dir" || continue

    remote_url=$(git remote get-url origin 2>/dev/null || true)

    # Only change if it's SSH style: git@<host>:<path>.git
    if [[ $remote_url =~ ^git@([^:]+):(.+)$ ]]; then
        host="${BASH_REMATCH[1]}"
        path="${BASH_REMATCH[2]}"
        new_url="https://${host}/${path}"
        echo "[$repo_dir] Changing remote from:"
        echo "    $remote_url"
        echo "to:"
        echo "    $new_url"
        git remote set-url origin "$new_url"
    fi

    cd - >/dev/null || exit
done
