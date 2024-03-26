var bookings = [
    {
        name: 'AA',
        destination: "desAA",
        checkInDate: "2012-02-03",
        checkOutDate: "2013-02-03",
        numTravelers: 3,
        image: 'https://i1-dulich.vnecdn.net/2022/12/20/DL3-1671504342.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=zpl53VHfaXZ79ZCMOkADCA'
    },
    {
        name: 'BB',
        destination: "desBB",
        checkInDate: "2012-02-03",
        checkOutDate: "2013-02-03",
        numTravelers: 3,
        image: 'https://i1-dulich.vnecdn.net/2022/12/20/DL3-1671504342.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=zpl53VHfaXZ79ZCMOkADCA'
    },
    {
        name: 'CC',
        destination: "desCC",
        checkInDate: "2012-02-03",
        checkOutDate: "2013-02-03",
        numTravelers: 3,
        image: 'https://i1-dulich.vnecdn.net/2022/12/20/DL3-1671504342.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=zpl53VHfaXZ79ZCMOkADCA'
    },
    {
        name: 'AB',
        destination: "desAB",
        checkInDate: "2012-02-03",
        checkOutDate: "2013-02-03",
        numTravelers: 3,
        image: 'https://i1-dulich.vnecdn.net/2022/12/20/DL3-1671504342.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=zpl53VHfaXZ79ZCMOkADCA'
    },
    {
        name: 'BA',
        destination: "desBA",
        checkInDate: "2012-02-03",
        checkOutDate: "2013-02-03",
        numTravelers: 3,
        image: 'https://i1-dulich.vnecdn.net/2022/12/20/DL3-1671504342.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=zpl53VHfaXZ79ZCMOkADCA'
    },
    {
        name: 'CA',
        destination: "desCA",
        checkInDate: "2012-02-03",
        checkOutDate: "2013-02-03",
        numTravelers: 3,
        image: 'https://i1-dulich.vnecdn.net/2022/12/20/DL3-1671504342.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=zpl53VHfaXZ79ZCMOkADCA'
    }
];

function listBookings() {
    var bookingHTML = '';
    for (var i = 0; i < bookings.length; i++) {
        bookingHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${bookings[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${bookings[i].name}</h5>
                        <p class="card-text">Destination: ${bookings[i].destination}</p>
                        <p class="card-text">Check-in Date: ${bookings[i].checkInDate}</p>
                        <p class="card-text">Check-out Date: ${bookings[i].checkOutDate}</p>
                        <p class="card-text">Number of Travelers: ${bookings[i].numTravelers}</p>
                        <button onclick="Update(${i})">Sua</button>
                        <button onclick="Details(${i})">Chi tiet</button>
                        <button onclick="Deleted(${i})">Xoa</button>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('bookings').innerHTML = bookingHTML;
}

function Details(i){
    document.getElementById('show').style.maxHeight = "0"
    document.getElementById('show').style.overflow = 'hidden'
    document.getElementById('detail').style.maxHeight = "300vh"
        var  detail = `
                <img src="${bookings[i].image}"  alt="..."  style="width: 100%"> 
                    <div id="details-1">
                        <div id="detail_content" style="width: 70%">
                            <div class="card-body">
                            <h5 class="card-title">${bookings[i].name}</h5>
                            <p class="card-text">Destination: ${bookings[i].destination}</p>
                            <p class="card-text">Check-in Date: ${bookings[i].checkInDate}</p>
                            <p class="card-text">Check-out Date: ${bookings[i].checkOutDate}</p>
                            <p class="card-text">Number of Travelers: ${bookings[i].numTravelers}</p>
                        </div>
                    </div>
                    <div style="width: 20%">
                        <h1>Description</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, accusantium nisi? Pariatur eius eaque error sapiente, quis totam corporis dicta soluta optio neque nobis eum quia quae quisquam repudiandae placeat? Minus iure ipsa sapiente debitis asperiores quo beatae porro dolor voluptatibus incidunt adipisci deleniti iste animi, saepe consequatur voluptatum cum repellat ex. Iste ut assumenda sapiente quidem dolorem maxime ab! Ad, consectetur? Quae, magnam aspernatur. Commodi velit expedita, aliquid architecto cum ex nisi eaque ut vero fugit deserunt asperiores delectus ipsum debitis beatae. Minus consequatur eligendi dolorem quidem, eaque ratione?</p>
                        <button onclick="Back()">Back</button>
                    </div>
                </div>
            `
    document.getElementById('detail').innerHTML = detail
}

function Back(){
    document.getElementById('show').style.maxHeight = "100%"
    document.getElementById('detail').style.maxHeight = "0"
    document.getElementById('detail').style.overflow = 'hidden'
}
function addBooking(event) {
    event.preventDefault();
    var name = document.getElementById('nameInput').value;
    var destination = document.getElementById('destinationInput').value;
    var checkInDate = document.getElementById('checkInDateInput').value;
    var checkOutDate = document.getElementById('checkOutDateInput').value;
    var numTravelers = document.getElementById('numTravelersInput').value;
    var image = document.getElementById('imagePreview').src; // Lấy đường dẫn URL của ảnh đã được tải lên

    var newBooking = {
        name: name,
        destination: destination,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        numTravelers: numTravelers,
        image: image // Thêm đường dẫn URL của ảnh vào booking
    };
   
    bookings.push(newBooking);
    listBookings();
    resetForm();
}

function resetForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('destinationInput').value = '';
    document.getElementById('checkInDateInput').value = '';
    document.getElementById('checkOutDateInput').value = '';
    document.getElementById('numTravelersInput').value = '';
    document.getElementById('imagePreview').style.display = 'none'; // Ẩn hình ảnh trước khi tải lên
}

function searchBookings() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var filteredBookings = bookings.filter(function (booking) {
        return booking.name.toLowerCase().includes(searchInput) ||
            booking.destination.toLowerCase().includes(searchInput) ||
            booking.checkInDate.includes(searchInput) ||
            booking.checkOutDate.includes(searchInput);
    });

    var bookingHTML = '';
    for (var i = 0; i < filteredBookings.length; i++) {
        bookingHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${filteredBookings[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${filteredBookings[i].name}</h5>
                        <p class="card-text">Destination: ${filteredBookings[i].destination}</p>
                        <p class="card-text">Check-in Date: ${filteredBookings[i].checkInDate}</p>
                        <p class="card-text">Check-out Date: ${filteredBookings[i].checkOutDate}</p>
                        <p class="card-text">Number of Travelers: ${filteredBookings[i].numTravelers}</p>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('bookings').innerHTML = bookingHTML;
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block'; // Hiển thị hình ảnh trước khi tải lên
    };

    reader.readAsDataURL(file);
}
function Deleted(i){
    bookings.splice(i,1)
    listBookings();
 }
function Update(i){
    document.getElementById('nameInput').value = bookings[i].name;
    document.getElementById('destinationInput').value = bookings[i].destination;
    document.getElementById('checkInDateInput').value = bookings[i].checkInDate;
    document.getElementById('checkOutDateInput').value = bookings[i].checkOutDate;
    document.getElementById('numTravelersInput').value = bookings[i].numTravelers;

    document.getElementById('Update').addEventListener('click',() =>{
        bookings[i].name = document.getElementById('nameInput').value;
        bookings[i].destination = document.getElementById('destinationInput').value;;
        bookings[i].checkInDate = document.getElementById('checkInDateInput').value;;
        bookings[i].checkOutDate = document.getElementById('checkOutDateInput').value;
        bookings[i].numTravelers = document.getElementById('numTravelersInput').value;
        listBookings()
    })            
 }