package com.baseSetup;

import android.content.Intent;
import android.util.Log;
import android.widget.Toast;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CustomModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext context;

    public CustomModule(ReactApplicationContext reactContext) {
        this.context = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "CustomModule";
    }

    @ReactMethod
    public void simpleMethod() {
        Log.e("", "This is my simple Method");
        Toast.makeText(context, "Check Logcat for console", Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void simpleMethodReturns(Callback callback) {
        callback.invoke("Success");
    }

    @ReactMethod
    public void simpleMethodWithParams(String name, Callback callback) {
        callback.invoke("Welcome to native code " + name);
    }

    @ReactMethod
    public void resolvePromise(Promise promise) {
        promise.resolve("Function Resolved");
    }

    @ReactMethod
    public void NativeView(Promise promise) {
        Intent intent = new Intent(context, NativeView.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);
    }
}
