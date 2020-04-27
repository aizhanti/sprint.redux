const router = require("express").Router();
const builds = require("./builds");
const store = require("../../../redux/redux");

router.get("/", (req, res) => {
  const projects = store.dispatch({ type: "GET" });
  console.log("router.get/GET: projects:", projects);
  return res.send(projects);
});

router.post("/", (req, res) => {
  const { project } = req.body;
  console.log("project:", project);
  // return res.status(201).json(project);
  // TODO Add new project, give it an id and send it back.
  // .res
  //   .status(418)
  //   .json({ message: "Not Implemented" })
});

router.get("/:projectId", (req, res) => {
  const { projectId } = req.params;
  // TODO retrieve and send project with given id
  res.status(418).json({ message: "Not Implemented" });
});

router.patch("/:projectId", (req, res) => {
  const { projectId } = req.params;
  const { project } = req.body;
  // TODO edit a projects information. Make sure to validate whats being sent!
  res.status(418).json({ message: "Not Implemented" });
});

router.delete("/:projectId", (req, res) => {
  const { projectId } = req.params;
  // TODO delete project, return status 200 with no body on success
  res.status(418).json({ message: "Not Implemented" });
});

router.use("/:projectId/builds", builds);

module.exports = router;
