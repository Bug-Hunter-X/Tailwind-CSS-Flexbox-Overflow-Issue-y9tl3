```javascript
<div class="flex flex-wrap">
  <div class="bg-red-500 p-4 w-1/2">
    <p>This is some long text that exceeds the width of the div. It should now wrap properly due to `flex-wrap`.</p>
  </div>
  <div class="bg-blue-500 p-4 w-1/2">
     <p>This is more text, demonstrating the improved wrapping behavior.</p>
  </div>
</div>
```
Adding `flex-wrap` allows the flex items to wrap onto multiple lines, preventing overflow and creating a more robust and predictable layout.  Consider using other flexbox utilities along with `flex-wrap` to achieve the desired behavior for your specific layout needs.