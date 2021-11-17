# chrome-pdf-printer

![NPM](https://img.shields.io/npm/l/chrome-pdf-printer) ![npm](https://img.shields.io/npm/v/chrome-pdf-printer)

Print webpage as PDF via headless Chrome. This is a cli app build with [html-pdf-chrome](https://www.npmjs.com/package/html-pdf-chrome).

## Usage

```bash
chrome-pdf-printer [options] --url <webpage_url> --save </path/to/pdf/filename.pdf>
```

Run `chrome-pdf-printer --help` to see all command options.

## Examples

```bash
# convert a webpage to pdf
chrome-pdf-printer --url https://typo.sofi.sh/ --save /home/username/test.pdf
# include background and no margins
chrome-pdf-printer --print-background --margin-top 0 --margin-bottom 0 --margin-left 0 --margin-right 0 --url https://typo.sofi.sh/ --save /home/username/test.pdf
# set PDF paper size
chrome-pdf-printer --print-background --paper-width 8.3 --paper-height 11.7 --url https://typo.sofi.sh/ --save /home/username/test.pdf
```

