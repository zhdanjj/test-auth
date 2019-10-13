function messageDescriptor(id, data={}) {
  return {
    descriptor: {id},
    data
  }
}

export const required = value => value === undefined ? messageDescriptor('validation.required') : undefined;

export const minLength = (length) => {
  return (value) => {
    return value && value.length >= length ? undefined : messageDescriptor('validation.minLength', {length});
  };
}
