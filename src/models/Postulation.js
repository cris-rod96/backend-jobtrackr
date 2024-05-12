import mongoose, { model } from "mongoose";
const { Model, models, Schema } = mongoose;

const PostulationSchema = new Schema(
  {
    companyName: {
      type: String,
      required: [true, "La empresa es obligatoria"],
    },
    jobTitle: {
      type: String,
      required: [true, "El puesto es obligatorio"],
    },
    location: {
      type: String,
      required: [true, "El país es obligatorio"],
    },
    modality: {
      type: String,
      required: [true, "La modalidad es obligatoria"],
      enum: ["Remoto", "Híbrido", "Presencial"],
    },
    offeredSalary: {
      type: Number,
      required: [true, "El salario es obligatorio"],
    },
    recruiterName: {
      type: String,
      required: [true, "El reclutador es obligatorio"],
    },
    recruiterEmail: {
      type: String,
      required: [true, "El email del reclutador es obligatorio"],
    },
    recruiterPhone: {
      type: String,
      required: [true, "El teléfono del reclutador es obligatorio"],
    },
    communicationChannel: {
      type: String,
      required: [true, "El canal de comunicación es obligatorio"],
    },
    companyWebsite: {
      type: String,
    },
    status: {
      type: String,
      enum: [
        "Pendiente",
        "Rechazada",
        "Aprobada",
        "En revisión",
        "Cancelada",
        "En espera",
        "En proceso",
        "Finalizada",
        "Aceptada",
        "Denegada",
        "En evaluación",
        "En consideración",
        "En espera de decisión",
        "En espera de respuesta",
        "En espera de aprobación",
        "En espera de confirmación",
      ],
      default: "Pendiente",
    },
    requisites: {
      type: [String],
      required: [true, "Los requisitos son obligatorios"],
      default: [],
    },
    postulationDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

export const Postulations =
  models.Postulations || model("Postulations", PostulationSchema);
