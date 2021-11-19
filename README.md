# Ciphering CLI Tool

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
