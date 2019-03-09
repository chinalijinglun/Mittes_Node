module.exports = router => {
  router.get("/userasd", async function(ctx, next) {
    ctx.body = "this a users response!";
  });
};
