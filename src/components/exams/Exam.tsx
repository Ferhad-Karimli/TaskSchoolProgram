import { Grid, Button } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import dayjs from "dayjs";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import style from "./Exam.module.css";

type FormValues = {
  lessonCode: string;
  numberOfStudent: string;
  examDate: number;
  price: number;
};
export default function Exam() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();
  const [startDate, setStartDate] = useState(new Date());
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data, "Ders elave et");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container className={style.container}>
        <Grid item lg={3} spacing={2}>
          <Controller
            name="lessonCode"
            control={control}
            rules={{
              required: "This field is required",
              maxLength: {
                value: 3,
                message: "Maximum length is 3 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                className={style.input}
                {...field}
                label="Dərsin kodu"
                variant="outlined"
                error={!!errors.lessonCode}
                helperText={errors?.lessonCode?.message as React.ReactNode}
              />
            )}
          />
        </Grid>
        <Grid item lg={3} spacing={2}>
          <Controller
            name="numberOfStudent"
            control={control}
            rules={{
              required:
                "This field is required,Please enter a valid number between 0 and 99999",
              pattern: {
                value: /^[0-9]{1,2,3,4,5}$/,
                message: "Please enter a valid number between 0 and 99999",
              },
            }}
            render={({ field }) => (
              <TextField
                className={style.input}
                {...field}
                label="Şagirdin nömrəsi"
                variant="outlined"
                error={!!errors.numberOfStudent}
                helperText={errors?.numberOfStudent?.message as React.ReactNode}
                onChange={(e) => {
                  const input = e.target.value;
                  if (/^[0-9]{0,5}$/.test(input)) {
                    field.onChange(input);
                  }
                }}
                value={field.value !== undefined ? field.value : ""}
              />
            )}
          />
        </Grid>
        <Grid item lg={3}>
          <Controller
            name="examDate"
            control={control}
            rules={{ required: "Exam date is required" }}
            render={({ field }) => (
              <>
                <ReactDatePicker
                  selected={field.value ? new Date(field.value) : null}
                  onChange={(date) => field.onChange(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Imtahan tarixini seçin"
                  className={style.dateİnput}
                />
                {errors.examDate && (
                  <p style={{ color: "red" }}>{errors.examDate.message}</p>
                )}
              </>
            )}
          />
        </Grid>

        <Grid item lg={3} spacing={2}>
          <Controller
            name="price"
            control={control}
            rules={{
              required:
                "This field is required,Please enter a valid number between 0 and 9",
              pattern: {
                value: /^[0-9]{1}$/,
                message: "Please enter a valid number between 0 and 9",
              },
            }}
            render={({ field }) => (
              <TextField
                className={style.input}
                {...field}
                label="Qiyməti"
                variant="outlined"
                error={!!errors.price}
                helperText={errors.price?.message as React.ReactNode}
                onChange={(e) => {
                  const input = e.target.value;
                  if (/^[0-9]?$/.test(input)) {
                    field.onChange(input);
                  }
                }}
                value={field.value !== undefined ? field.value : ""}
              />
            )}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={style.btn}
      >
        Məlumatı əlavə et
      </Button>
    </form>
  );
}
