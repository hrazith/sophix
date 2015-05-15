jQuery(document).ready(function() {

    /*
    Adding date picker to all text inputs
    with the class .datepicker added.
    */
    jQuery('.datepicker').datepicker();

    /*
    Change class on artifact info when
    timeline artifact is clicked.
    */
    jQuery(".artifact").click(function() {
        jQuery('#artifact-info').removeClass('complete med-add');
    });

    jQuery('.artifact.complete').click(function() {
        jQuery('#artifact-info').removeClass('med-add').addClass('complete');
    });

    jQuery('.artifact.med-add').click(function() {
        jQuery('#artifact-info').removeClass('complete').addClass('med-add');
    });
});
