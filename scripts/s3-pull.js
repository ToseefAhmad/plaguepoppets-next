const { sync } = require('./lib/s3-clients');

const run = async () => {

  console.log("Syncing public/video from S3");
  await sync('s3://plaguepoppets.com/video', './public');
/* 
  console.log("Syncing public/img from S3");
  await sync('s3://plaguepoppets.com/img', './public');

  console.log("Syncing public/svg from S3");
  await sync('s3://plaguepoppets.com/svg', './public');

  console.log("Syncing public/opengraph from S3");
  await sync('s3://plaguepoppets.com/opengraph', './public');

  console.log("Syncing public/icons from S3");
  await sync('s3://plaguepoppets.com/icons', './public');

  console.log("Syncing public/fonts from S3");
  await sync('s3://plaguepoppets.com/fonts', './public'); */
}
run();