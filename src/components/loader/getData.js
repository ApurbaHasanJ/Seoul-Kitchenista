export const serverData = async () => {
  try {
    const serverData = await fetch(
      "https://seoul-kitchenista-server-apurbahasanj.vercel.app/chef/"
    );
    const chefsData = await serverData.json();
    console.log(chefsData);
    return chefsData;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
