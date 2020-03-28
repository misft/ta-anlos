public class LocationListener extends HeadlessJsTaskService {

  @Override
  protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {
    Bundle extras = intent.getExtras();
    if (extras != null) {
      return new HeadlessJsTaskConfig(
          "LocationListener",
          Arguments.fromBundle(extras),
          5000, // timeout for the task
          true // optional: defines whether or not  the task is allowed in foreground. Default is false
        );
    }
    return null;
  }
}