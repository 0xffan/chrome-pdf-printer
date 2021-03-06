# chrome-pdf-printer

![NPM](https://img.shields.io/npm/l/chrome-pdf-printer?color=blue) ![npm](https://img.shields.io/npm/v/chrome-pdf-printer?color=brightgreen)

Print webpage as PDF via headless Chrome. This is a cli app build with [html-pdf-chrome](https://www.npmjs.com/package/html-pdf-chrome).

## Usage

```bash
chrome-pdf-printer [options] --url <webpage_url> --save </path/to/pdf/filename.pdf>
```

Run `chrome-pdf-printer --help` to see all command options.

## `CompletionTrigger` support

There are a few `CompletionTrigger` types in [html-pdf-chrome](https://github.com/westy92/html-pdf-chrome) that wait for something to occur before triggering PDF printing, see details [here](https://github.com/westy92/html-pdf-chrome#trigger-render-completion).

`Timer`, `Element`, `Variable` are supported in this project. The related command options are:

```bash
--printTrigger           # Trigger type: timer, element or variable
--triggerTimeout         # Milliseconds to wait for. Only effective for type Timer. Defaults to 7000ms.
--triggerElement         # Name of the DOM element to wait for, like 'div#myElement'. Only effective for type Element. Defaults to '#htmlPdfDone'.
--triggerVariable        # Name of the variable to wait for. Only effective for type Variable. Defaults to 'htmlPdfDone'.
```

## Examples

```bash
# convert a webpage to pdf
chrome-pdf-printer \
  --url https://typo.sofi.sh \
  --save /home/username/test.pdf
# include background, and no margins
chrome-pdf-printer \
  --print-background \
  --margin-top 0 --margin-bottom 0 --margin-left 0 --margin-right 0 \
  --url https://typo.sofi.sh \
  --save /home/username/test.pdf
# set paper size
chrome-pdf-printer \
  --print-background \
  --paper-width 8.3 --paper-height 11.7 \
  --url https://typo.sofi.sh \
  --save /home/username/test.pdf
# set chrome flags
chrome-pdf-printer \
  --chrome-flags=--headless \
  --chrome-flags=--disable-gpu \
  --chrome-flags=--hide-scrollbars \
  --url https://typo.sofi.sh \
  --save /home/username/test.pdf
```

