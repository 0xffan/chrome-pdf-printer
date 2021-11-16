#! /usr/bin/env node
const yargs = require("yargs/yargs")(process.argv.slice(2));
const ChromePDFPrinter = require("../index");

const options = yargs
  .usage("\nUsage: $0 [options] --url <webpage_url> --pdf <pdf_file>")
  .example("$0 --url http://baidu.com --pdf test.pdf")
  .options({
    url: {
      description: "Webpage URL to print as PDF.",
      demand: true,
    },
    pdf: {
      description: "The generated PDF file to save as.",
      demand: true,
    },
    host: {
      description: "The Chrome host to connect to.",
      type: "string",
    },
    port: {
      description: "The Chrome port to connect to.",
    },
    landscape: {
      description: "landscape.",
      boolean: true,
    },
    printBackground: {
      description: "printBackground.",
      boolean: true,
    },
    marginTop: {
      description: "marginTop.",
    },
    marginBottom: {
      description: "marginBottom.",
    },
    marginLeft: {
      description: "marginLeft.",
    },
    marginRight: {
      description: "marginRight.",
    },
    paperWidth: {
      description: "paperWidth.",
    },
    paperHeight: {
      description: "paperHeight.",
    },
    pageRanges: {
      description: "pageRanges.",
    },
    displayHeaderFooter: {
      description: "displayHeaderFooter.",
      boolean: true,
    },
    headerTemplate: {
      description: "headerTemplate.",
      type: "string",
    },
    footerTemplate: {
      description: "footerTemplate.",
      type: "string",
    },
    scale: {
      description: "scale. 0.1 ~ 2",
    },
    chromeFlags: {
      description: "chrome flags.",
      array: true,
    },
  })
  .help(true).argv;

// the parsed data is stored in options.
// console.dir(options);

(async () => {
  try {
    await ChromePDFPrinter.printPDF(options.url, options.pdf, options);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
  process.exit();
})();