//
//  sandboxApp.swift
//  sandbox
//
//  Created by Wes Jones on 10/26/25.
//

import SwiftUI
import CoreData

@main
struct sandboxApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
