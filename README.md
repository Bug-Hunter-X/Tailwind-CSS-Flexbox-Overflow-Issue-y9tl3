# Tailwind CSS Flexbox Overflow Bug

This repository demonstrates a common issue encountered when using Tailwind CSS's flexbox utilities. The problem arises when content within flex items exceeds their allocated width, causing overflow and unexpected layout behavior.

## Problem Description
The provided code uses `flex` and `w-1/2` to create two side-by-side divs. However, if the content within the divs expands beyond half the width of their parent container, the content overflows.  Tailwind's `flex` utility, by default, does not cause content to wrap.

## Solution
The solution involves using additional Tailwind classes to manage overflow.  We use `flex-wrap` to allow elements to wrap onto a new line when they exceed their allotted space.  This prevents the overflow and ensures the layout behaves predictably.

## How to Reproduce
1. Clone this repository.
2. Open `index.html` in a web browser.
3. Observe the overflowing elements in the initial example.
4. View the `solution.html` example to see how the `flex-wrap` utility resolves the issue.
