const container_facs_1 = document.getElementById("container_facs_1");
container_facs_1.style.height = `${String(screen.height / 2)}px`;
//container_facs_1.style.height = `${String(window.innerHeight - container_facs_1.offset.top)}px`;
/*var wrapper_column = document.getElementsByClassName("facsimiles")[0];
var text_container = document.getElementById("section");
const image_size_relations =
  container_facs_1.getBoundingClientRect().width /
  Number(container_facs_1.style.height.replace("px", ""));
// set osd wrapper container width
var container = document.getElementById("viewer");
if (text_container !== null) {
  var width = text_container.clientWidth;
} else {
  var width = 0;
}
// check if facsimiles are displayed
container.style.width = "auto";
if (!wrapper_column.classList.contains("fade")) {
  // if true get width from sibling container - offset
  container.style.width = `${String(width - 25)}px`;
} else {
  // if false get width from sibling container / 2
  container.style.width = `${String(width.clientWidth / 2)}px`;
}*/
/*
##################################################################
get all image urls stored in span el class tei-xml-images
creates an array for osd viewer with static images
##################################################################
*/
var element = document.getElementsByClassName("pb");
var tileSources = [];
var img = element[0].getAttribute("source");
var imageURL = {
  type: "image",
  url: img,
};
tileSources.push(imageURL);

/*
##################################################################
initialize osd
##################################################################
*/
var viewer = OpenSeadragon({
  id: "container_facs_1",
  prefixUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.0.0/images/",
  sequenceMode: true,
  showNavigator: true,
  tileSources: tileSources,
});
/*
##################################################################
remove container holding the images url
##################################################################
*/
// setTimeout(function() {
//     document.getElementById("container_facs_2").remove();
// }, 500);

/*
##################################################################
index and previous index for click navigation in osd viewer
locate index of anchor element
##################################################################
*/
var idx = 0;
var prev_idx = -1;

/*
##################################################################
triggers on scroll and switches osd viewer image base on 
viewport position of next and previous element with class pb
pb = pagebreaks
##################################################################
*/
window.addEventListener("scroll", function (event) {
  // elements in view
  var esiv = [];
  for (let el of element) {
    if (isInViewportAll(el)) {
      esiv.push(el);
    }
  }
  if (esiv.length != 0) {
    // first element in view
    var eiv = esiv[0];
    // get idx of element
    var eiv_idx = Array.from(element).findIndex((el) => el === eiv);
    idx = eiv_idx + 1;
    prev_idx = eiv_idx - 1;
    // test if element is in viewport position to load correct image
    if (isInViewport(element[eiv_idx])) {
      loadNewImage(element[eiv_idx]);
    }
  }
});

/*
##################################################################
function to trigger image load and remove events
##################################################################
*/
function loadNewImage(new_item) {
  if (new_item) {
    // source attribute hold image item id without url
    var new_image = new_item.getAttribute("source");
    var old_image = viewer.world.getItemAt(0);
    if (old_image) {
      // get url from current/old image and replace the image id with
      // new id of image to be loaded
      // access osd viewer and add simple image and remove current image
      viewer.addSimpleImage({
        url: new_image,
        success: function (event) {
          function ready() {
            setTimeout(() => {
              viewer.world.removeItem(viewer.world.getItemAt(0));
            }, 200);
          }
          // test if item was loaded and trigger function to remove previous item
          if (event.item) {
            // .getFullyLoaded()
            ready();
          } else {
            event.item.addOnceHandler("fully-loaded-change", ready());
          }
        },
      });
    }
  }
}

/*
##################################################################
accesses osd viewer prev and next button to switch image and
scrolls to next or prev span element with class pb (pagebreak)
##################################################################
*/
var element_a = document.getElementsByClassName("anchor-pb");
var prev = document.querySelector("div[title='Previous page']");
var next = document.querySelector("div[title='Next page']");
prev.style.opacity = 1;
next.style.opacity = 1;
prev.addEventListener("click", () => {
  if (idx == 0) {
    element_a[idx].scrollIntoView();
  } else {
    element_a[prev_idx].scrollIntoView();
  }
});
next.addEventListener("click", () => {
  element_a[idx].scrollIntoView();
});

/*
##################################################################
function to check if element is close to top of window viewport
##################################################################
*/
function isInViewport(element) {
  // Get the bounding client rectangle position in the viewport
  var bounding = element.getBoundingClientRect();
  // Checking part. Here the code checks if el is close to top of viewport.
  // console.log("Top");
  // console.log(bounding.top);
  // console.log("Bottom");
  // console.log(bounding.bottom);
  if (
    bounding.top <= 180 &&
    bounding.bottom <= 210 &&
    bounding.top >= 0 &&
    bounding.bottom >= 0
  ) {
    return true;
  } else {
    return false;
  }
}

/*
##################################################################
function to check if element is anywhere in window viewport
##################################################################
*/
function isInViewportAll(element) {
  // Get the bounding client rectangle position in the viewport
  var bounding = element.getBoundingClientRect();
  // Checking part. Here the code checks if el is close to top of viewport.
  // console.log("Top");
  // console.log(bounding.top);
  // console.log("Bottom");
  // console.log(bounding.bottom);
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  ) {
    return true;
  } else {
    return false;
  }
}

/*
##################################################################
eventlisteners to max hight of the container
##################################################################
*/

const delay_ms = 20;
const throttle = function (throttled_func) {
  let time = Date.now();
  return () => {
    if((time + delay_ms - Date.now()) <= 0) {
      throttled_func();
      time = Date.now();
    };
  };
};

const image_rights = document.getElementsByClassName("image_rights")[0];
function calculate_facsContainer_height(facsContainer) {
  let image_rights_height = image_rights.getBoundingClientRect().height;
  let new_container_height =
    window.innerHeight -
    facsContainer.getBoundingClientRect().top -
    image_rights_height;
  return Math.round(new_container_height);
};

function resize_facsContainer() {
    let new_container_height = calculate_facsContainer_height(container_facs_1);
    if (new_container_height != container_facs_1.clientHeight) {
      container_facs_1.style.height = `${String(new_container_height)}px`;
    };
};

// create event-listeners
var osd_container_resize_events = ["scroll", "resize", "load"];
for (trigger_event_type of osd_container_resize_events) {
  window.addEventListener(
    trigger_event_type,
    //resize_facsContainer
    throttle(
      resize_facsContainer,
      delay_ms
    )
  );
};

resize_facsContainer()