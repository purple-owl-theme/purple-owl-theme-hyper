exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
	borderColor: '#c792ea',
	cursorColor: '#c792ea',
	css: `
	  ${config.css || ''}
	  .tabs_nav .tabs_list .tab_text {
		color: #c792ea;
	  }
	  .tabs_nav .tabs_title {
		color: #c792ea;
	  }
	`
  });
}