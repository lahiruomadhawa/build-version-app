export const getAppVersion = () => {
  return process.env.REACT_APP_VERSION || 'development';
};

export const getBuildTime = () => {
  return process.env.REACT_APP_BUILD_TIME || null;
};

export const getVersionInfo = () => {
  const version = getAppVersion();
  const buildTime = getBuildTime();
  
  return {
    version,
    buildTime,
    formattedBuildTime: buildTime ? new Date(buildTime).toLocaleString() : null
  };
};

export const getVersionString = () => {
  const { version, buildTime } = getVersionInfo();
  if (buildTime) {
    const date = new Date(buildTime).toLocaleDateString();
    return `v${version} (${date})`;
  }
  return `v${version}`;
};