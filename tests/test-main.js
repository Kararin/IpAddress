var allTestFiles = [];

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    if (/test\.js$/.test(file)) {
        allTestFiles.push(file);
    }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/app',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
