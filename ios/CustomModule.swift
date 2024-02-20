//
//  CustomModule.swift
//  BaseProject
//
//  Created by Kajal Verma on 26/10/23.
//

import Foundation
import Toast_Swift
@objc(CustomModule) class CustomModule: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool { return true }
  @objc public func simpleMethod() {
    print("This is my simple Method")
    DispatchQueue.main.async {
      UIApplication.shared.keyWindow?.makeToast("Check Logcat for console")
    }
  }
  
  @objc public func simpleMethodReturns(
    _ callback: RCTResponseSenderBlock
  ) {
    callback(["Success"])
  }
  
  @objc public func simpleMethodWithParams(
    _ param: String,
    callback: RCTResponseSenderBlock
  ) {
    callback(["Welcome to native code \(param)"])
  }
  
  @objc public func resolvePromise(
    _ resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) -> Void {
    resolve("Function Resolved")
  }
  
}
