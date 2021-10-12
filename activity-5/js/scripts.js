/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression) to keep
 * out variables constrained to the scope of this function and out of the global scope....
 */
 (function() {

  /***************************************************************
  * Package data and constructor objects
  ****************************************************************/

  // Package data array (simulated data source, such as JSON or database recordset)
  var data = [
    {
      name: 'CSS Peek',
      description: 'CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.',
      author: 'Pranay Prakash',
      url: 'https://marketplace.visualstudio.com/items?itemName=riccardoNovaglia.missinglineendoffile',
      downloads: 2316755,
      stars: 3.5,
      price: 'Free',
      selector: 'p1'
    },
    {
      name: 'GitLens',
      description: 'The GitLens extension is truly amazing; it enables you to visualize code authorship within VS Code. You can browse and explore the history of a file, view a git blame annotation for each file line, and even add a changes (diff) hover annotation, all of which are fully customizable.',
      author: 'GitKraken',
      url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
      downloads: 11076721,
      stars: 5,
      price: 'Free',
      selector: 'p2'
    }
  ];
  
  // (VS COde) Package constructor function
  function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector; // *** REMEMBER TO ADD THIS IF YOU ADDED IT TO THE DATA OBJECTS ** //

    this.getFormattedDownloads = function() {
      return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function() {
      return this.stars.toLocaleString();
    };
  }
  
  /*******************************
   * Utility functions
   *******************************/

  // Return today's date, formatted
  var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
  };

  // Returns DOM element by id.
  // We're just wrapping document.getElementById
  // in a shorthand function. If this seems confusing,,,,
  // then just replace getEl with document.getElementById
  // in the writePackageInfo function.
  var getEl = function(id) {
    return document.getElementById(id);
  };

  /**
   * Write's the package object's data to the appropriate
   * Dom elements utilizing the package selector property.
   * @param {Package} package Package object
   * @returns {void}
   */
  var writePackageInfo = function(package) {
    // Get a reference to the DOM elements
    var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

    // Write package data to DOM elements
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
  };
  
  /******************************************************
   * Utilize package data and constructor objects to
   * construct each package, then add package data to
   * the page via DOM functions.
   ******************************************************/

  // Write date
  var dateEl = getEl('date');
  dateEl.textContent = getTodaysDate();

  /**
   * Write package data one-by-one or with a for loop.
   * Remember to comment out the on you don't use.
   */


  // Write package data one-by-one
  var cssPeek = new Package(data[0]);
  writePackageInfo(cssPeek);

  var gitLens = new Package(data[1]);
  writePackageInfo(gitLens);
  
  }());