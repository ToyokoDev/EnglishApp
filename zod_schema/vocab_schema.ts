import { z } from "zod";

export const createVocabSchema = z.object({
  word: z.string().trim().min(1, "Vocab cann't be empty!").max(30,"vocab cann't be that long").regex(/^[a-zA-Z\s]+$/, "Vocab can only have English letter!"),
  definition: z.string().trim().min(1, "Definition cann't be empty!").max(80,"write the definition shorter so you can easily understand it"),
  type: z.enum(["noun", "adj", "adv", "verb", "idiom", "other"], {
    message: "Please select type for vocab",
  })
});