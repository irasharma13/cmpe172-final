import AWS from 'aws-sdk';
let rek = new AWS.Rekognition();

export default async function main(event, context ,callback){
	// const body = JSON.parse(event.body);
	// const ret = {
	// 	text: "bismillah",
	// 	...body
	// };
	// callback(null, ret);
	let { bucket, key } = JSON.parse(event.body);
	try{
		let labels = await rek.detectLabels({
			Image: {
				S3Object: {
					Bucket: bucket,
					Name: key
				}
			},
			MaxLabels: 3,
			MinConfidence: 75
		});
		callback(null, labels);
	}catch (e){
		callback(e);
	}
}