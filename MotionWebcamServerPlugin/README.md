# Motion Webcam Server Plugin

## Description

This plugin runs the [motion](https://github.com/Motion-Project/motion) webcam streaming service as a DSF plugin. The main `motion.conf` file is accessible via `0:/sys/motion.conf`.

Note that the default configuration uses the default `/dev/video0` device node, which is generally applicable to external USB webcams. Depending on your choice of camera, extra customizations may be required.

## Setup in DWC

To configure this service in DWC, go to the `Settings` -> `General` page and make the following changes:

- Set `Webcam URL` to `http://[HOSTNAME]:8081/0/stream`
- Set `Webcam update interval (in ms)` to `0`
- Go to the `Job` -> `Webcam` page to see your live stream

## Build instructions

Create a ZIP file of every file but `README.md` in this directory and make sure `plugin.json` is at the root level. Once created, the ZIP can be installed as a third-party plugin.

## Logging

Unfortunately this service outputs info and warning log messages even if the log level is initially set, so by default this plugin's configuration suppresses all the log messages and only sends them to the `duetpluginservice` journal log.

### Checking the journald log (recommended way)

To view the log of the motion service, open a Linux console (or connect over SSH) and run

```
journalctl -u duetpluginservice -f
```

Then restart the Motion Webcam Server plugin and look for potential errors.


### Modify plugin manifest to see all messages in DWC

To see all the output messages from the motion service directly in DWC, open `plugin.json` and set `sbcOutputRedirected` from `false` to `true`. Then build the plugin again and overwrite the existing installation.
Once the plugin is restarted, all the log messages are written to the DWC console.

### Increasing the log level

If you need further details, you can reset `log_level` in `motion.conf` from `3` (critical) to `6` (notice). Note that a restart of the plugin is required whenever the config file is modified.

