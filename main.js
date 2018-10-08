// function SendRequest(form_id, extra_data, url, show_ui_message, method, validate, ui_place, callback, noLoader)
// {
//   if (noLoader) {
//   } else {
//    custom_showLoader(form_id);
//   }
//   var formData = $('#'+form_id).serialize();

//   $.ajax({
//       url: only_prefix_url+""+url,
//       headers: {
//         'X-Transaction': 'POST Example',
//         'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
//       },
//       data: formData+"&"+extra_data,
//       type: method,
//       error: function(error){

//           if (url == "/users/get_admin_exports") 
//           {
//               $('#export_link').html("<img src='/assets/overlay/loading.gif' /> Exporting in background");
//           }
//           else if (url == "/users/get_admin_exports_job") 
//           {
//               $('#export_job_link').html("<img src='/assets/overlay/loading.gif' /> Exporting in background");
//           }
//           else
//           {
//             if (show_ui_message == "true")
//             {
//                //$('#'+form_id).hide();
//                 //$('#'+form_id+'_ui_message').html("<div class='fail'>"+$('#global_error_message').text()+"</div>").show();
//             }
//             else if(show_ui_message == "data")
//             {
//                 $('#'+ui_place).html("<div class='fail'>"+$('#global_error_message').text()+"</div>");
//             }
//             else
//             {
//                 custom_hideLoader(form_id, 'fail', $('#global_error_message').text(), '');
//             }
//             if (typeof callback !== "undefined") {
//               callback(error, form_id, extra_data, url, show_ui_message, method, validate, ui_place);
//             }
//           }
//       },
//       success: function(data){
//         if(show_ui_message != "data") {
//           try {
//             parsed_data = jQuery.parseJSON(data);
//           } catch(err) {
//             parsed_data = data;
//           }
//         }
//         if (show_ui_message == "true") {
//           if(parsed_data["key"] == "S1") {
//             $('#'+form_id).hide();
//             $('#'+form_id+'_ui_message').show();
//           } else {
//            custom_hideLoader(form_id, parsed_data["status"], parsed_data["msg"], parsed_data["redirection"]);
//           }
//         } else if(show_ui_message == "data") {
//           $('#'+ui_place).html(data);
//           $('#'+form_id+' .response_loader').html("");
//         } else if(show_ui_message == "json") {
//           callback(data, form_id, extra_data, url, show_ui_message, method, validate, ui_place);
//         } else {
//           if (parsed_data["redirection"] == "undefined" || parsed_data["redirection"] == undefined) {
//           } else {
//             custom_hideLoader(form_id, parsed_data["status"], parsed_data["msg"], parsed_data["redirection"]);
//           }
//         }
//         if (typeof callback !== "undefined") {
//           callback(data, form_id, extra_data, url, show_ui_message, method, validate, ui_place);
//         }
//         $('input, textarea').placeholder({customClass:'my-placeholder'});
//       }
//   });
//   return false;
// }


// SendRequest("default", "note_id="+noteId, "/tasks/list", "data", "POST", "false", "view-notification-modal-content", function(data, form_id, extra_data, url, show_ui_message, method, validate, ui_place) {
//       $("#view-notification-modal").modal("show");
//     });