module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: String,
      address: String,
      login_date: Date,
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model("user", schema);
};
