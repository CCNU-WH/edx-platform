/**
* Module for emitting Course Sharing Events.
*/
(function(define) {
    'use strict';

    define(['jquery', 'logger'], function($, Logger) {
        return function() {

            return {
                emitShareClicked: function(
                    url, share_window_name, share_window_config,
                    course_id, social_media_site, location
                ){
                    window.open(url, share_window_name, share_window_config);
                    Logger.log('edx.course.sharing.share_clicked', {
                        course_id: course_id,
                        social_media_site: social_media_site,
                        location: location
                    });
                }
            };
        };
    });
}).call(this, define || RequireJS.define);
