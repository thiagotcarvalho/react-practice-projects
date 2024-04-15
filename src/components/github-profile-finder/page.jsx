'use client'

import { useEffect, useState } from 'react';

export default function GitHubProfileFinder() {
  return (
    <div className="github-profile-container">
      <div className="github-input-wrapper">
        <input
          name="github-username"
          type="text"
          placeholder="Enter GitHub username..."
        />
        <button>Search</button>
      </div>
    </div>
  )
}