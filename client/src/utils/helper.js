export const validateEmail = (email) => {
  const regex = /^[^\s@l+@[^\s@l+.[^\s@]+$/;
  return regex.test(email);
};