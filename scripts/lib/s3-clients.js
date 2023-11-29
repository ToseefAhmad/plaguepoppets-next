require('dotenv').config();

const { S3Client } = require('@aws-sdk/client-s3');
const S3SyncClient = require('s3-sync-client');

// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: process.env.AWS_REGION });
const { sync } = new S3SyncClient({ client: s3Client });

exports.sync = sync;