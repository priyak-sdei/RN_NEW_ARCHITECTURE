//
//  CustomModule.m
//  BaseProject
//
//  Created by Kajal Verma on 26/10/23.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(CustomModule, NSObject)
RCT_EXTERN_METHOD(simpleMethod)

RCT_EXTERN_METHOD(simpleMethodReturns:
                  (RCTResponseSenderBlock) callback
                  )
RCT_EXTERN_METHOD(simpleMethodWithParams:
                  (NSString *) param
                  callback: (RCTResponseSenderBlock)callback
                  )
RCT_EXTERN_METHOD(
                  resolvePromise:(RCTPromiseResolveBlock) resolve
                  rejecter: (RCTPromiseRejectBlock) reject
                  )
RCT_EXPORT_METHOD(NativeView:(RCTPromiseResolveBlock)resolveFunction
                  rejectFunction:(RCTPromiseRejectBlock)rejectFunction){

  dispatch_async(dispatch_get_main_queue(), ^{
    UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"Main" bundle:nil];

    UINavigationController *navigationController = [storyboard instantiateViewControllerWithIdentifier:@"NativeViewController"];
    navigationController.modalPresentationStyle = UIModalPresentationFullScreen;
    UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
    [rootViewController presentViewController:navigationController animated:YES completion:nil];
  });
}
@end
