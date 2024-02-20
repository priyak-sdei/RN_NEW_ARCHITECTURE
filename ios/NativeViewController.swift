//
//  NativeViewController.swift
//  BaseProject
//
//  Created by Kajal Verma on 31/10/23.
//

import UIKit

class NativeViewController: UIViewController {

  @IBOutlet weak var btn: UIButton!
  
  override func viewDidLoad() {
        super.viewDidLoad()
    }

  @IBAction func onClick(_ sender: Any) {
    let alert = UIAlertController(title: "warning!", message: "Do you really want to exit", preferredStyle: .alert)
    alert.addAction(UIAlertAction(title: "No", style: .default, handler: nil))
     alert.addAction(UIAlertAction(title: "Yes", style: .default, handler: {_ in
      DispatchQueue.main.async {
        self.dismiss(animated: true, completion: nil);
      }
    }))
    self.present(alert, animated: true)
    return
  }
}
