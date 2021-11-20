# Ciphering CLI Tool

## Task #1 - Ciphering CLI Tool creation

To run project open your terminal and execute next steps:

1. Clone the project:
`git clone git@github.com:artur-nikitsin/NodeJS2021Q4-task1.git`

2. Enter to the root project directory in which "ciphering-cli-tool.js" is exists:
`cd NodeJS2021Q4-task1`

3. Checkout to develop branch:
`git checkout develop`

5. Execute next command:
`node ciphering-cli-tool.js -c ${CIPHER_OPTION} -i ${INPUT_FILE_OPTION} -o ${OUTPUT_FILE_OPTION}`

Where:

`-c` - option provide cipher config, which must has format: `{XY(-)}n`, where:
  * `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
  * `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
For example: `C1-C1-R0-A`
<br />

`-i` - option provide path to input file. For example: `input.txt`
<br />
`-o` - option provide path to output file. For example: `output.txt`

Example possible run command:
<br />
`node ciphering-cli-tool.js -c "C1-C1-R0-A" -i "input.txt" -o "output.txt"`

## Task #1 - Ciphering CLI Tool testing using JEST
For project tests executing open your terminal and execute next steps:

1. Clone the project:
   `git clone git@github.com:artur-nikitsin/NodeJS2021Q4-task1.git`

2. Enter to the root project directory in which "ciphering-cli-tool.js" is exists:
   `cd NodeJS2021Q4-task1`

3. Checkout to task #2  branch:
   `git checkout task-2-jest-testing`

4. For tests execution use next commands:
    * For running module tests:
    `npm run test` or `yarn test`
   
    * For checking tests coverage:
        `npm run coverage` or `yarn coverage`

    * For executing task default success & error scenarios on the level of app:
      `npm run e2e-test` or `yarn e2e-test`
    In accordance with task this command runs default scenarios test, which consists:

* Error when "-c" config option provided twice
* Error when "-c" not provided
* Error when user passed "-i" argument with path that doesn't exist or with no read access
* Error when user passed "-o" argument with path that doesn't exist or with no read access
* Error when user passed incorrect symbols in argument for config
* Test passed when user passed correct sequence of symbols as argument for -c that matches regular expression
* Test passed when user passed "C1-C1-R0-A" config and output transformed text is correct
* Test passed when user passed "C1-C0-A-R1-R0-A-R0-R0-C1-A" config and output transformed text is correct
* Test passed when user passed "A-A-A-R1-R0-R0-R0-C1-C1-A" config and output transformed text is correct
* Test passed when user passed "C1-R1-C0-C0-A-R0-R1-R1-A-C1" config and output transformed text is correct

