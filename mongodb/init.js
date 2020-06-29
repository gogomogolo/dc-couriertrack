
var collectionList = db.runCommand( { listCollections: 1 } ).cursor.firstBatch;

var courierLocationHistory = false, storeLocation = false;
var i;
for (i = 0; i < collectionList.length; i++) {
  if (collectionList[i].name === "courierLocationHistory") courierLocationHistory = true;
  if (collectionList[i].name === "courierLocationHistory") storeLocation = true;
}

if (!courierLocationHistory) {
	db.createCollection("courierLocationHistory");
	db.courierLocationHistory.createIndex({courierId: 1});
	db.courierLocationHistory.createIndex({date: 1});
	db.courierLocationHistory.createIndex({"courierId": 1, "date": 1});
}

if (!storeLocation) {
	db.createCollection("storeLocation");
	db.storeLocation.createIndex({ coordinate : "2dsphere" });
	db.storeLocation.insertMany(
	[
		{
			"_id": "Ataşehir MMM Migros",
			"coordinate" : { x: 29.1244229, y: 40.9923307 }
		},
		{
			"_id": "Novada MMM Migros",
			"coordinate" : { x: 29.1161293, y:  40.986106 }
		},
		{
			"_id": "Beylikdüzü 5M Migros",
			"coordinate" : { x: 28.6552262, y: 41.0066851 } 
		},
		{
			"_id": "Ortaköy MMM Migros",
			"coordinate" : { x: 29.0210292, y: 41.055783 }
		},
		{
			"_id": "Caddebostan MMM Migros",
			"coordinate" : { x: 29.0630908, y: 40.9632463 }
		}
	]);
}
