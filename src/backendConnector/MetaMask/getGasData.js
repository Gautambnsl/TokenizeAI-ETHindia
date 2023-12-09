export const getData = async () => {
  try {
    const res = await fetch(
      `https://gas.api.infura.io/networks/1/suggestedGasFees`,
      {
        headers: {
          Authorization: `Basic YWQyMmQ1YWUzYWQwNGI1MDkyMGVmZTU2NmVlYTg4OTA6MGJkZWEwN2UwYjU1NDAyZmIwZmQ1YzVjYjk3MjA4NDA=`,
        },
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log('Server responded with:', error);
  }
};
