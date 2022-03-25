import { Router } from "express";
import { async } from "jshint/src/prod-params";
import {
  renderAsistencia,
  createAsistencia,
  editAsistenciaGet,
  editAsistenciaPost,
  deleteAsistencia,
  doneAsistencia,
} from "../controllers/asistencia.controller";

const router = Router();

router.get("/", renderAsistencia);

router.post("/asistencia/add", createAsistencia);

router.get("/asistencia/:id/toggleDone", doneAsistencia);

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/asistencia/:id/edit", editAsistenciaGet);

router.post("/asistencia/:id/edit", editAsistenciaPost);

router.get("/asistencia/:id/delete", deleteAsistencia);

export default router;
