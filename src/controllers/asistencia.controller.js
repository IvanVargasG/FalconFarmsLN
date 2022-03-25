import Asistencia from "../models/Asistencia";

export const renderAsistencia = async (req, res) => {
  const asistencias = await Asistencia.find().lean();
  //Mostrar por consola la lista; console.log(asistencias);

  res.render("index", { asistencias: asistencias });
};


export const createAsistencia = async (req, res) => {
    try {
      // Leer por consola; console.log(req.body);
      const asistencia = Asistencia(req.body);
      // Ver en formato JSON; console.log(asistencia);
  
      const asistSave = await asistencia.save();
      console.log(asistSave);
  
      // Ver msj por en la pagina; res.send('Saved');
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  export const editAsistenciaGet = async (req, res) => {
    try {
      const asistencia = await Asistencia.findById(req.params.id).lean();
      res.render("edit", { asistencia });
    } catch (error) {
      console.log(error.message);
    }
  };


  export const editAsistenciaPost = async (req, res) => {
    try {
      const { id } = req.params;
      await Asistencia.findByIdAndUpdate(id, req.body);
      res.redirect("/");
    } catch (error) {
      console.log(error.message);
    }
  };


  export const deleteAsistencia = async (req, res) => {
    try {
      const { id } = req.params;
      await Asistencia.findByIdAndDelete(id);
      res.redirect("/");
    } catch (error) {
      console.log(error.message);
    }
  };


  export const doneAsistencia = async (req, res) => {
    try {
      const { id } = req.params;
      const asistencia = await Asistencia.findById(id);
      asistencia.done = !asistencia.done;
      await asistencia.save();
      res.redirect("/");
    } catch (error) {
      console.log(error.message);
    }
  };