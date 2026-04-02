@echo off
echo ========================================
echo   AIPNT - Copying Generated Images
echo ========================================
echo.

set SRC=C:\Users\HpdJoy\.gemini\antigravity\brain\41c473e5-9a9d-45b9-ae07-8ef2865316cd
set DST=c:\Users\HpdJoy\Projects\WEB PROJECTS\AIpNT\public\assets

copy "%SRC%\corporate_training_hero_1775154247571.png" "%DST%\corporate-training-hero.png"
echo [1/8] corporate-training-hero.png - DONE

copy "%SRC%\summer_internship_hero_1775154268863.png" "%DST%\summer-internship-hero.png"
echo [2/8] summer-internship-hero.png - DONE

copy "%SRC%\school_stem_hero_1775154287595.png" "%DST%\school-stem-hero.png"
echo [3/8] school-stem-hero.png - DONE

copy "%SRC%\government_hero_1775154317081.png" "%DST%\government-hero.png"
echo [4/8] government-hero.png - DONE

copy "%SRC%\corporate_delivery_1775154337054.png" "%DST%\corporate-delivery.png"
echo [5/8] corporate-delivery.png - DONE

copy "%SRC%\stem_lab_setup_1775154371866.png" "%DST%\stem-lab-setup.png"
echo [6/8] stem-lab-setup.png - DONE

copy "%SRC%\internship_demo_day_1775154405002.png" "%DST%\internship-demo-day.png"
echo [7/8] internship-demo-day.png - DONE

copy "%SRC%\government_scale_1775154401794.png" "%DST%\government-scale.png"
echo [8/12] government-scale.png - DONE

copy "%SRC%\hardware_iot_track_1775160239101.png" "%DST%\hardware_iot.png"
echo [9/12] hardware_iot.png - DONE

copy "%SRC%\medical_devices_track_1775160265690.png" "%DST%\medical_devices.png"
echo [10/12] medical_devices.png - DONE

copy "%SRC%\software_dev_track_1775160287313.png" "%DST%\software_dev.png"
echo [11/12] software_dev.png - DONE

copy "%SRC%\ai_ml_track_1775160307309.png" "%DST%\ai_ml.png"
echo [12/12] ai_ml.png - DONE

echo.
echo ========================================
echo   All 12 images copied successfully!
echo ========================================
pause
