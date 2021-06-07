module.exports = {
  // passPerPreset: true, // doesn't work with this setting
  presets: [
    {plugins: ['babel-plugin-fbt', 'babel-plugin-fbt-runtime']},
    'next/babel'
  ],
};
