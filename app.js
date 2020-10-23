// Submit Button handler
function handleSubmit() {
    // @TODO: YOUR CODE HERE
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input value from the form
    let idchoice = d3.select("#idInput").node().value;
    console.log('id', idchoice);

    // clear the input value
    d3.select('#idInput').node().value = "";

    // Build the plot with the new stock
    buildPlot(samples);
}


function buildPlot(samples) {

    d3.json("/samples.json).then(function(metadata) {
            // Grab values from the response json object to build the plots
            let id = metadata.dataset.id;
            let ethnicity = metadata.dataset.ethnicity;
            let gender = metadata.dataset.gender;
            let age = metadata.dataset.age;
            let location = metadata.dataset.location;
            let bbtype = metadata.dataset.bbtype;
            let wfreq = metadata.dataset.wfreq;

            // Print the names of the columns
            console.log(metadata.dataset.column_names);
            // Print the data for each day
            console.log(metadata.dataset.data);


            // Use map() to build an array of the ids
            let ids = metadata.dataset.data.map(row => row[0]);

            // Use map() to build an array of the ethnicities
            let ethnicities = metadata.dataset.data.map(row => row[1]);

            // Use map() to build an array of the genders
            let genders = metadata.dataset.data.map(row => row[2]);

            // Use map() to build an array of the ages
            let ages = metadata.dataset.data.map(row => row[3]);

            // Use map() to build an array of the locations
            let locations = metadata.dataset.data.map(row => row[4]);

            // Use map() to build an array of the bbtypes
            let bbtypes = metadata.dataset.data.map(row => row[5]);

            // Use map() to build an array of the wash frequencies
            let wfreqs = metadata.dataset.data.map(row => row[6]);


            let trace1 = {
                type: "horizontalbar",
                mode: "bars",
                id: id,
                x: id.count,
                y: bbtype,
                line: {
                    color: "#17BECF"
                }
            };