const homeController = (req, res) => {
  res.render("home", { title: "Hello World" });
};

export { homeController };
