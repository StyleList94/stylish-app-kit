export default {
  '*.{js,jsx,ts,tsx}': (files) => {
    const templateFiles = {};

    for (const file of files) {
      const match = file.match(/templates\/([^/]+)\//);
      if (match) {
        const template = match[1];
        if (!templateFiles[template]) {
          templateFiles[template] = [];
        }
        templateFiles[template].push(file);
      }
    }

    return Object.entries(templateFiles).map(([template, fileList]) => {
      const fileArgs = fileList.map((f) => `"${f}"`).join(' ');
      return `sh -c 'cd templates/${template} && pnpm exec eslint --fix ${fileArgs}'`;
    });
  },
};
