const router = require("express").Router();
const builds = require("./builds");
const store = require("../../../redux/redux");
console.log("store test:", store.getState());

router.get("/", (req, res) => {
  store.dispatch({ type: "GET" });
  const projects = store.getState();
  console.log("router.get/GET: projects:", projects);
  return res.send(JSON.stringify(projects));
});

router.post("/", (req, res) => {
  const { project } = req.body;
  const result = store.dispatch({ type: "POST", payload: project });
  return res.send(result);
});

router.get("/:projectId", (req, res) => {
  const { projectId } = req.params;
  // TODO retrieve and send project with given id
  console.log("projectId", projectId, req.params);
  const result = store.dispatch({ type: "GET", payload: projectId });

  return res.send(result);
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
