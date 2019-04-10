function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function batchdownload() {
  var iframe = $('#Record_frame')[0].contentWindow.document;
  var parentRecordContainer = $(iframe).find('div.record-container');
  for(var i=0; i < parentRecordContainer.length; i++) {
    var recorderDay = $(parentRecordContainer[i]).find('ul li');
    for(var j=0; j<recorderDay.length; j++) {
      $(recorderDay[j]).find('em').click();
      await sleep(1000);
      $(iframe).find(".download").click();
      await sleep(3000);
      $(recorderDay[j]).find('em').click();
      await sleep(1000);
    }
  }
}
batchdownload();
