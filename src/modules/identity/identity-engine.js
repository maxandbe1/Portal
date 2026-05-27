let identityState = {
  name: "Max",
  status: "active"
};

export function getIdentityState() {
  return identityState;
}

export function updateIdentityState(newState) {
  identityState = { ...identityState, ...newState };
}
