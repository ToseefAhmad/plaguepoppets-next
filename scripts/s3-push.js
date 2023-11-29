const { sync } = require('./lib/s3-clients');

const run = async () => {
  console.log("Syncing public/video to S3");
  await sync('./public/video', 's3://plaguepoppets.com/video');

/*   console.log("Syncing public/img from S3");
  await sync('./public/img', 's3://plaguepoppets.com/img');

  console.log("Syncing public/svg from S3");
  await sync('./public/svg', 's3://plaguepoppets.com/svg');

  console.log("Syncing public/opengraph from S3");
  await sync('./public/opengraph', 's3://plaguepoppets.com/opengraph');

  console.log("Syncing public/icons from S3");
  await sync('./public/icons', 's3://plaguepoppets.com/icons');

  console.log("Syncing public/fonts from S3");
  await sync('./public/fonts', 's3://plaguepoppets.com/fonts'); */
}
run();