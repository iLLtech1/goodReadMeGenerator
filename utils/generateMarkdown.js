// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## description
${data.description} 

## table of contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install the dependencies for this application run ${data.installation}

## Usage

To install the dependencies for this application run ${data.usage}

## License

To install the dependencies for this application run ${data.license}

## Contributing

To install the dependencies for this application run ${data.contributing}

## Tests

To install the dependencies for this application run ${data.test}

## Questions

To install the dependencies for this application run ${data.questions}
`;
}

module.exports = generateMarkdown;
